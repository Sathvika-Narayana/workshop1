const workoutsList = [
    {
        id: 1,
        name: "High-Intensity Interval Training",
        category: "cardio",
        duration: "30 min",
        calories: "400",
        image: "https://source.unsplash.com/800x600/?hiit"
    },
    {
        id: 2,
        name: "Power Yoga Flow",
        category: "flexibility",
        duration: "45 min",
        calories: "200",
        image: "https://source.unsplash.com/800x600/?yoga"
    },
    {
        id: 3,
        name: "Strength Training",
        category: "strength",
        duration: "60 min",
        calories: "350",
        image: "https://source.unsplash.com/800x600/?weightlifting"
    }
    // Add more workout templates
];

function displayWorkouts(workouts) {
    const grid = document.querySelector('.workouts-grid');
    grid.innerHTML = '';
    
    workouts.forEach(workout => {
        const card = document.createElement('div');
        card.className = 'workout-card slide-in';
        card.innerHTML = `
            <div class="workout-image" style="background-image: url('${workout.image}')"></div>
            <div class="workout-details">
                <h3>${workout.name}</h3>
                <p>${workout.duration} | ${workout.calories} calories</p>
                <button onclick="startWorkout(${workout.id})" class="start-btn">Start Workout</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter functionality
document.getElementById('categoryFilter').addEventListener('change', (e) => {
    const filtered = e.target.value ? 
        workoutsList.filter(w => w.category === e.target.value) : 
        workoutsList;
    displayWorkouts(filtered);
});

// Search functionality
document.getElementById('searchWorkouts').addEventListener('input', (e) => {
    const filtered = workoutsList.filter(w => 
        w.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayWorkouts(filtered);
});

// Initial display
displayWorkouts(workoutsList);