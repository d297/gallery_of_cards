document.addEventListener('DOMContentLoaded', () => {
    const crypto = {
        'BTC':['BITCOIN','Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2020, the true identity of the person — or organization — that is behind the alias remains unknown.'],
        'ETH':['ETHEREUM','Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.'],
        'ADA':['CARDANO', 'Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change.'],
        'LTC':['LITECOIN', 'Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology. '],
        'DOGE':['DOGECOIN', 'Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin\'s creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme. Tesla CEO Elon Musk posted several tweets on social media that Dogecoin is his favorite coin.']
    }

    const slides = document.querySelectorAll('.slide');

    slides.forEach(elem => {
        elem.addEventListener('mouseover', () => {
            elem.classList.add('active');
            document.querySelector('h1').textContent = crypto[elem.getAttribute('data-crypto')][0]
            document.querySelector('.description').textContent = crypto[elem.getAttribute('data-crypto')][1];
        });
    });
    slides.forEach(elem => {
        elem.addEventListener('mouseout', () =>{
            elem.classList.remove('active');
            document.querySelector('h1').textContent = "cryptocurrency".toUpperCase();
            document.querySelector('.description').textContent = "";
        });
    });
        
    

});