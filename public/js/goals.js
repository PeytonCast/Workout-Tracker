const programGoalHandler = async (event) => {
    event.preventDefault();

    const checkbox = document.querySelectorAll('.checkbox');
    let buildmuscle = false
    let flexandtone = false
    let cardiocondition = false
    for (let i = 0; i < checkbox.length; i++) { 
        if(checkbox[i].checked && checkbox[i].value === "Build Muscle") {
            buildmuscle = true
        } else if (checkbox[i].checked && checkbox[i].value === "Tone") {
            flexandtone = true
        } else if (checkbox[i].checked && checkbox[i].value === "Conditioning") {
            cardiocondition = true
        }
    }

    alert(buildmuscle + " " + flexandtone + " " + cardiocondition)
    
        const response = await fetch('api/users/goals', {
            method: 'POST',
            body: JSON.stringify({ buildmuscle, flexandtone, cardiocondition }), 
            headers: { 'content-Type': 'application/json'}
        });
   
};

document
.querySelector('.goalsBtn')
.addEventListener('click', programGoalHandler);