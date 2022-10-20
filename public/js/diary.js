const programFormHandler = async (event) => {
    event.preventDefault();

    const comments = document.querySelector('#comments');
    const workoutDate = document.querySelector('#date');

    if(comments) {
        const response = await fetch('api/users/diary', {
            method: 'POST',
            body: JSON.stringify({ comments: comments.value, workoutDate: workoutDate.value }), 
            headers: { 'content-Type': 'application/json'}
        }); console.log(response)
        comments.value=""
        workoutDate.value=""
    } 
};

document
.querySelector('.diaryBtn')
.addEventListener('click', programFormHandler);