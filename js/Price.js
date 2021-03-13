import { prices } from './prices.js';

class Price {
    // displays prices
    render() {
        // checkbox toggle button method
        this.toggleBtn();
        // loop over all the prices data
        prices.forEach((item) => {
            // deconstruct prices
            const { annually, data, storage, title, user } = item;
            // assign container DOM
            const container = document.querySelector('.pricing-container');
            // create new pricing html
            const pricing = `
                        <div class="pricing">
                            <h3>${title}</h3>
                            <div>
                                <h3>&dollar;</h3>
                                <h2>${annually}</h2>
                            </div>
                            <ul>
                                <li>${storage}</li>
                                <li>${user}</li>
                                <li>${data}</li>
                            </ul>
                            <button class="learn-more">Learn More</button>
                        </div>`;
            // insert new pricing html into container
            container.insertAdjacentHTML('beforeend', pricing);
        });
    }
    toggleBtn() {
        const toggleBtn = document.querySelector('input[type=checkbox]');
        // add event listener to checkbox
        toggleBtn.addEventListener('change', () => {
            toggleBtn.checked
                ? // pass monthly to update price when checked
                  this.updatePrice('monthly')
                : // pass annually to update price when unchecked
                  this.updatePrice('annually');
        });
    }
    updatePrice(i) {
        if (i == 'monthly') {
            // loop over prices
            prices.forEach((item, index) => {
                const priceDOM = document.querySelectorAll('h2');
                // change innerHTML to monthly
                priceDOM[index].innerHTML = item.monthly;
            });
        } else {
            // loop over prices
            prices.forEach((item, index) => {
                const priceDOM = document.querySelectorAll('h2');
                // change innerHTML to annually
                priceDOM[index].innerHTML = item.annually;
            });
        }
    }
}

export default Price;
