var slider = tns({
    container: '#base',
    items: 4,
    speed: 500,
    responsive: {
        0: {
            controls: false,
            fixedWidth: 320,
            gutter: 24,
            nav: false,
        },

        768: {
            controls: true,
            nav: false,
            controlsText: [`<svg xmlns="http://www.w3.org/2000/svg" class="arrow-left" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.757 12L15.707 16.95C15.8025 17.0422 15.8787 17.1526 15.9311 17.2746C15.9835 17.3966 16.0111 17.5278 16.0122 17.6606C16.0134 17.7934 15.9881 17.9251 15.9378 18.048C15.8875 18.1708 15.8133 18.2825 15.7194 18.3764C15.6255 18.4703 15.5138 18.5445 15.3909 18.5948C15.268 18.6451 15.1364 18.6704 15.0036 18.6692C14.8708 18.6681 14.7396 18.6405 14.6176 18.5881C14.4956 18.5357 14.3852 18.4595 14.293 18.364L8.63599 12.707C8.44852 12.5195 8.3432 12.2652 8.3432 12C8.3432 11.7348 8.44852 11.4805 8.63599 11.293L14.293 5.636C14.4816 5.45384 14.7342 5.35305 14.9964 5.35532C15.2586 5.3576 15.5094 5.46277 15.6948 5.64818C15.8802 5.83359 15.9854 6.0844 15.9877 6.3466C15.9899 6.60879 15.8891 6.8614 15.707 7.05L10.757 12Z" fill="#475569"></path>
        </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M13.314 12.071L8.36399 7.12098C8.18184 6.93238 8.08104 6.67978 8.08332 6.41758C8.0856 6.15538 8.19077 5.90457 8.37618 5.71916C8.56158 5.53375 8.8124 5.42859 9.07459 5.42631C9.33679 5.42403 9.58939 5.52482 9.77799 5.70698L15.435 11.364C15.6225 11.5515 15.7278 11.8058 15.7278 12.071C15.7278 12.3361 15.6225 12.5905 15.435 12.778L9.77799 18.435C9.58939 18.6171 9.33679 18.7179 9.07459 18.7157C8.8124 18.7134 8.56158 18.6082 8.37618 18.4228C8.19077 18.2374 8.0856 17.9866 8.08332 17.7244C8.08104 17.4622 8.18184 17.2096 8.36399 17.021L13.314 12.071Z" fill="#475569"/>
</svg>`]
        },

        1200: {
            fixedWidth: false,
            items: 4,
            controls: true,
        }
    }
});


let headerContainer = document.createElement('div');
headerContainer.classList.add('container');

let activatedSmallNavBtn = document.getElementById('active-small-nav');

let smallNavContainer = document.getElementById('small-nav-container');

activatedSmallNavBtn.addEventListener('click', () => {
    if (activatedSmallNavBtn.classList.contains("activated-small-nav")) {

        document.body.classList.add('overflow-h')


        headerContainer.innerHTML = `
 
    <div class="header-content">
        <nav class="header-nav">
            <ul>
                <li class="nav-item">
                    <a href="#" class="nav-link">Explore</a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">Solutions</a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">Log In</a>
                </li>
            </ul>
        </nav>
        <div class="section-btn">
            <button type="button">Start Now</button>
            </div>
    </div>
    
        `
        smallNavContainer.appendChild(headerContainer);
        smallNavContainer.style.right = "0";

        activatedSmallNavBtn.classList.add('remove-small-nav');
        activatedSmallNavBtn.classList.remove('activated-small-nav');

    } else if (activatedSmallNavBtn.classList.contains('remove-small-nav')) {

        activatedSmallNavBtn.classList.add('activated-small-nav');
        activatedSmallNavBtn.classList.remove('remove-small-nav');

        smallNavContainer.style.right = "-100%";

        headerContainer.remove();

        document.body.classList.remove('overflow-h')

    }
})
