
const courses = [
    { title: "Web Development", category: "Development" },
    { title: "Data Science", category: "Data" },
    { title: "Graphic Design", category: "Design" },
    { title: "Machine Learning", category: "Data" },
    { title: "Digital Marketing", category: "Marketing" },
];


function displayCourses(courseList) {
    const courseContainer = document.getElementById('courseList');
    courseContainer.innerHTML = ''; 

    courseList.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.textContent = `${course.title} (${course.category})`;
        courseContainer.appendChild(courseItem);
    });
}


function filterCourses(category) {
    if (category === 'All') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
}

document.getElementById('categorySelect').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterCourses(selectedCategory);
});

displayCourses(courses);