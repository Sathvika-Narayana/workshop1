let workouts = [];

function addWorkout() {
    const activity = document.getElementById('activity').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    if (activity && duration && calories) {
        const workout = {
            id: Date.now(),
            activity,
            duration,
            calories,
            date: new Date().toLocaleDateString()
        };

        workouts.push(workout);
        updateStats();
        displayWorkouts();
        clearInputs();
    }
}

function deleteWorkout(id) {
    workouts = workouts.filter(workout => workout.id !== id);
    updateStats();
    displayWorkouts();
}

function updateStats() {
    document.getElementById('total-workouts').textContent = workouts.length;
    document.getElementById('total-minutes').textContent = workouts.reduce((total, workout) => total + workout.duration, 0);
    document.getElementById('total-calories').textContent = workouts.reduce((total, workout) => total + workout.calories, 0);
}

function displayWorkouts() {
    const workoutList = document.getElementById('workout-history');
    workoutList.innerHTML = '';

    workouts.forEach(workout => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${workout.activity} - ${workout.duration} minutes - ${workout.calories} calories (${workout.date})
            <button class="delete-btn" onclick="deleteWorkout(${workout.id})">Delete</button>
        `;
        workoutList.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('activity').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('calories').value = '';
}
