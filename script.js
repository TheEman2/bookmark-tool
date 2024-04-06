const bookmarkInput = document.getElementById('bookmark-input');
const addBookmarkButton = document.getElementById('add-bookmark');
const bookmarkList = document.getElementById('bookmark-list');

// Load bookmarks from local storage
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
bookmarks.forEach(addBookmark);

addBookmarkButton.addEventListener('click', function() {
    const url = bookmarkInput.value;
    if (url) {
        addBookmark(url);
        bookmarks.push(url);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        bookmarkInput.value = '';
    }
});

function addBookmark(url) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.textContent = url;
    li.appendChild(a);
    bookmarkList.appendChild(li);
}
