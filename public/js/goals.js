

const goalFormHandler = async (event) => {
    event.preventDefault();
    const id  = document.getElementById('goals-user-id').value.trim()

    if (document.querySelector("#goal-one").checked) {
      
      const response = await fetch(`/api/users/goals/${id}`, {
        method: 'put',
        body: JSON.stringify({'goal_id': 1 }),
        headers: { 'Content-Type': 'application/json' },
       
      });
      
    //   redirects location to the home page
      if (response.ok) {
        
        document.location.replace('/programs')
        // extra to make sure the page loads the changes
        document.location.replace('/programs')
      } else {
        alert('please select one');
      }
    }
    if (document.getElementById('goal-two').checked) {
        const response = await fetch(`/api/users/goals/${id}`, {
          method: 'PUT',
          body: JSON.stringify({'goal_id': 2 }),
          headers: { 'Content-Type': 'application/json' },
        });
        
       //redirects location to the home page
        if (response.ok) {
          document.location.replace('/programs')
          // extra to make sure the page loads the changes
          document.location.replace('/programs')
        } else {
          alert('error');
        }
      }
      if (document.getElementById('goal-three').checked) {
        const response = await fetch(`/api/users/goals/${id}`, {
          method: 'PUT',
          body: JSON.stringify({'goal_id': 3 }),
          headers: { 'Content-Type': 'application/json' },
        });
      //   redirects location to the home page
        if (response.ok) {
          document.location.replace('/programs')
          // extra to make sure the page loads the changes
          document.location.replace('/programs')
        } else {
          alert('error');
        }
      }
  };
  
 
  
  document
    .querySelector('.goals-form')
    .addEventListener('submit', goalFormHandler);
