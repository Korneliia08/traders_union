const priceData = [
    {id: 1, month: 'June 2024', minPrice: '$59,944.84', maxPrice: '$73,265.92', avgPrice: '$66,605.38'},
    {id: 2, month: 'July 2024', minPrice: '$60,244.57', maxPrice: '$73,632.25', avgPrice: '$66,938.41'},
    {id: 3, month: 'August 2024', minPrice: '$60,545.79', maxPrice: '$74,000.41', avgPrice: '$67,273.1'},
    {id: 4, month: 'September 2024', minPrice: '$60,848.52', maxPrice: '$74,370.42', avgPrice: '$67,609.47'},
    {id: 5, month: 'October 2024', minPrice: '$61,152.77', maxPrice: '$74,742.27', avgPrice: '$67,947.52'},
    {id: 6, month: 'November 2024', minPrice: '$61,458.53', maxPrice: '$75,115.99', avgPrice: '$68,287.26'},
    {id: 7, month: 'December 2024', minPrice: '$61,765.83', maxPrice: '$75,491.57', avgPrice: '$68,628.7'},
    {id: 8, month: 'January 2025', minPrice: '$62,074.66', maxPrice: '$75,869.02', avgPrice: '$66,605.38'},
    {id: 9, month: 'February 2025', minPrice: '$62,385.03', maxPrice: '$73,632.25', avgPrice: '$66,938.41'},
    {id: 10, month: 'March 2025', minPrice: '$62,696.95', maxPrice: '$74,000.41', avgPrice: '$67,273.1'},
    {id: 11, month: 'April 2025', minPrice: '$63,010.44', maxPrice: '$74,370.42', avgPrice: '$67,609.47'},
    {id: 12, month: 'May 2025', minPrice: '$63,325.49', maxPrice: '$74,742.27', avgPrice: '$67,947.52'}
];

const tableBody = document.querySelector('#priceTableBody-desktop');
const selectInTable = document.querySelector("#priceTableSelect-mobile")
const mobile_minimumPrice = document.querySelector("#priceTableBody-mobile_minimumPrice")
const mobile_maximumPrice = document.querySelector("#priceTableBody-mobile_maximumPrice")
const mobile_averagePrice = document.querySelector("#priceTableBody-mobile_averagePrice")

priceData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
                <td>${data.month}</td>
                <td>${data.minPrice}</td>
                <td>${data.maxPrice}</td>
                <td>${data.avgPrice}</td>
            `;
    tableBody.appendChild(row);


    const option = document.createElement('option');
    option.innerHTML = `${data.month}`
    option.value = data.id
    selectInTable.appendChild(option)
});


selectInTable.addEventListener("change", priceTableSelecyHandler)
priceTableSelecyHandler({target: {value: 1}})

function priceTableSelecyHandler(event) {
    const findValue = priceData.find(element => element.id.toString() === event.target.value.toString())
    mobile_minimumPrice.innerHTML = findValue.minPrice
    mobile_maximumPrice.innerHTML = findValue.maxPrice
    mobile_averagePrice.innerHTML = findValue.avgPrice
}
