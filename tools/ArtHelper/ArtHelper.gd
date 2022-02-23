extends Control

const YAML_PATH = "C:/Users/izzoy/repos/sciman101.github.io/_data/art.yml"
const ART_PATH = "C:/Users/izzoy/repos/sciman101.github.io/assets/img/art/"

const MAX_THUMBNAIL_SIZE = 256.0

onready var screen_Waiting = $WaitingForFiles
onready var screen_Fields = $GetFields

onready var previewImg = $GetFields/TextureRect
onready var properties = $GetFields/Properties

onready var field_name = $GetFields/VBoxContainer/FieldName
onready var field_date = $GetFields/VBoxContainer/FieldDate
onready var field_desc = $GetFields/VBoxContainer/FieldDescription
onready var field_tags = $GetFields/VBoxContainer/FieldTags

var image_queue = []

var imgTex

var pathStripper

func _ready():
	
	# Get the path
	
	get_tree().connect('files_dropped',self,'_on_files_dropped')
	
	screen_Waiting.visible = true
	screen_Fields.visible = false
	
	pathStripper = RegEx.new()
	print(pathStripper.compile("[ \\w-]+?(?=\\.)"))

func load_next_image():
	
	if image_queue.empty():
		screen_Waiting.visible = true
		screen_Fields.visible = false
		return
	
	var path = image_queue.pop_front()
	
	imgTex = ImageTexture.new()
	var err = imgTex.load(path)
	if err == OK:
		
		previewImg.texture = imgTex
		properties.text = "File: " + path + "\nSize: " + str(imgTex.get_width()) + "x" + str(imgTex.get_height())
		
		# populate fields
		field_name.text = pathStripper.search(path).strings[0]
		
		var f = File.new()
		if f.open(path,File.READ) == OK:
			var date = OS.get_datetime_from_unix_time(f.get_modified_time(path))
			field_date.text = "%d-%02d-%02d" % [date.year,date.month,date.day]
		
		field_desc.text = ""
		field_tags.text = ""
		
	else:
		load_next_image()


func process_image():
	
	var img = imgTex.get_data()
	
	img.unlock()
	img.save_png(ART_PATH+field_name.text+".png")
	
	var w = img.get_width()
	var h = img.get_height()
	if w > h:
		h = h * (MAX_THUMBNAIL_SIZE/w)
		w = MAX_THUMBNAIL_SIZE
	else:
		w = w * (MAX_THUMBNAIL_SIZE/h)
		h = MAX_THUMBNAIL_SIZE
	
	img.resize(w,h,Image.INTERPOLATE_BILINEAR)
	img.save_png(ART_PATH+"thumb/"+field_name.text+".png")
	img.lock()
	
	# Write to yaml
	var yaml = File.new()
	yaml.open(YAML_PATH,File.READ_WRITE)
	yaml.seek_end()
	
	yaml.store_line("")
	yaml.store_line("- file: " + field_name.text + ".png")
	yaml.store_line("  date: " + field_date.text)
	yaml.store_line("  caption: " + field_desc.text)
	yaml.store_line("  tags: " + field_tags.text)
	
	yaml.close()
	
	load_next_image()


# Load new files
func _on_files_dropped(files,screen):
	if screen_Waiting.visible:
		for file in files:
			image_queue.append(file)
		screen_Waiting.visible = false
		screen_Fields.visible = true
		load_next_image()
