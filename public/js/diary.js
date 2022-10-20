const programFormHandler = async (event) => {
    event.preventDefault();

    const comments = document.querySelector('#comments').value;
    const workoutDate = document.querySelector('#date').value;

    if(comments) {
        const response = await fetch('api/users/diary', {
            method: 'POST',
            body: JSON.stringify({ comments, workoutDate }), 
            headers: { 'content-Type': 'application/json'}
        });
    }
};

document
.querySelector('.diaryBtn')
.addEventListener('click', programFormHandler);