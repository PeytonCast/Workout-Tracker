const goalFormHandler = async (event) => {
    event.preventDefault();
    const id  = document.querySelector('#goals-user-id').value.trim()
    const one = document.querySelector('#goal-one').value.trim();
    const two = document.querySelector('#goal-two').value.trim();
    const three = document.querySelector('#goal-three').value.trim();
    

    if (one) {
      const response = await fetch(`/api/users/goals/${id}`, {
        method: 'PUT',
        body: JSON.stringify({one}),
        headers: { 'Content-Type': 'application/json' },
      });
      
    //   redirects location to the home page
      if (response.ok) {
        document.location.replace('/')
        // extra to make sure the page loads the changes
        document.location.replace('/')
      } else {
        alert('error');
      }
    }
    if (two) {
        const response = await fetch(`/api/users/goals/${id}`, {
          method: 'PUT',
          body: JSON.stringify({}),
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
      if (three) {
        const response = await fetch(`/api/users/goals/${id}`, {
          method: 'PUT',
          body: JSON.stringify({}),
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
