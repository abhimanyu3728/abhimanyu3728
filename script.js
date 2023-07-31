// Function to add a new note
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const notesList = document.getElementById('notes-list');
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value = '';
    }
}