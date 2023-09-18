document.addEventListener('DOMContentLoaded', () => {
    const orgList = document.getElementById('orgList');
    const orgTypeFilter = document.getElementById('orgTypeFilter');

    // Sample organization data (replace with your data)
    const organizations = [
        { name: 'Organization 1', type: 'government', details: 'Details for Organization 1' },
        { name: 'Organization 2', type: 'ngo', details: 'Details for Organization 2' },
        // Add more organization objects
    ];

    // Function to filter and display organizations
    function displayOrganizations() {
        const selectedType = orgTypeFilter.value;
        
        // Clear the current organization list
        orgList.innerHTML = '';

        // Filter organizations based on the selected type or display all
        const filteredOrganizations = selectedType === 'all'
            ? organizations
            : organizations.filter(org => org.type === selectedType);

        // Create and display organization items
        filteredOrganizations.forEach(org => {
            const orgItem = document.createElement('div');
            orgItem.classList.add('org-item');
            orgItem.innerHTML = `
                <h2>${org.name}</h2>
                <p>${org.details}</p>
            `;
            orgList.appendChild(orgItem);
        });
    }

    // Event listener for filter changes
    orgTypeFilter.addEventListener('change', displayOrganizations);

    // Initial display of organizations
    displayOrganizations();
});
