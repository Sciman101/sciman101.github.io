let allTagCheckboxes, allTaggedNodes, noTagsWarning;

window.onload = () => {
  allTagCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allTaggedNodes = document.querySelectorAll("[data-tags]");
  noTagsWarning = document.getElementById("no-tags");

  // Add initial tags
  for (const checkbox of allTagCheckboxes) {
    if (checkbox.checked) {
      activeTagSet.add(checkbox.id);
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
      checkbox.parentNode.classList.remove("hidden");
      count += 1;
    } else {
      checkbox.parentNode.classList.add("hidden");
    }
  }
  if (count == 0) {
    noTagsWarning.classList.remove("hidden");
  } else {
    noTagsWarning.classList.add("hidden");
  }
};

const updateVisibleNodes = () => {
  for (const node of allTaggedNodes) {
    const tagSet = new Set(node.dataset.tags.split(","));
    if (activeTagSet.size == 0 || tagSet.isSupersetOf(activeTagSet)) {
      node.classList.remove("hidden");
    } else {
      node.classList.add("hidden");
    }
  }
};
