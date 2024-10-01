let allTagCheckboxes, allTaggedNodes, noTagsWarning;

window.onload = () => {
  allTagCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allTaggedNodes = document.querySelectorAll("[data-tags]");
  noTagsWarning = document.getElementById("no-tags");

  // Get tags from page hash
  const hashTags = decodeURIComponent(window.location.hash.substring(1))
    .split(",")
    .filter((tag) => tag.length > 0);
  for (const tag of hashTags) {
    activeTagSet.add(tag);
  }

  // Add initial tags
  for (const checkbox of allTagCheckboxes) {
    if (checkbox.checked) {
      activeTagSet.add(checkbox.id);
    } else if (activeTagSet.has(checkbox.id)) {
      checkbox.checked = true;
    }
  }
  updateVisibleNodes();
};

const activeTagSet = new Set();

const handleTagToggled = (event) => {
  const tag = event.target.id;
  if (activeTagSet.has(tag)) {
    activeTagSet.delete(tag);
  } else {
    activeTagSet.add(tag);
  }
  updateVisibleNodes();
};

const handleTagSearch = (event) => {
  const text = event.target.value.toLowerCase();
  let count = 0;
  for (const checkbox of allTagCheckboxes) {
    if (text.length == 0 || checkbox.id.toLowerCase().includes(text)) {
      checkbox.parentElement.style.display = "block";
      count += 1;
    } else {
      checkbox.parentElement.style.display = "none";
    }
  }
  if (count == 0) {
    checkbox.parentElement.style.display = "block";
  } else {
    checkbox.parentElement.style.display = "none";
  }
};

const updateVisibleNodes = () => {
  for (const node of allTaggedNodes) {
    const tagSet = new Set(node.dataset.tags.split(","));
    if (activeTagSet.size == 0 || tagSet.isSupersetOf(activeTagSet)) {
      node.style.display = "block";
    } else {
      node.style.display = "none";
    }
  }
  // Update page hash
  window.location.hash = encodeURIComponent(Array.from(activeTagSet).join(","));
};
