document.addEventListener('DOMContentLoaded', (event) => {
    const isHomeownerElement = document.getElementById('is-homeowner');
    const notHomeownerElement = document.getElementById('not-homeowner');
    const addressElement = document.getElementById('address');
    const homeownerElement = document.getElementById('homeowner');
    const stepTwoElement = document.getElementById('stepTwo');
    const twoYesElement = document.getElementById('twoYes');
    const twoMaybeElement = document.getElementById('twoMaybe');
    const twoNoElement = document.getElementById('twoNo');
    const personalLoanElement = document.getElementById('personal-loan');
    const getStartedElement = document.getElementById('get-started');

    const checkElements = {
        check1: document.getElementById('check1'),
        check2: document.getElementById('check2'),
        check3: document.getElementById('check3'),
    };

    const onloadHeadline = 'Unlock cash and pay off your debts';
    const homeownerHeadline = "Thanks!^600 how much<br> are you looking for";
    const finalHeadline = "We have a match,^300 <br>let's prepare your offer";

    function hideAll() {
        homeownerElement.classList.remove('show');
        stepTwoElement.classList.remove('show');
        addressElement.classList.remove('show');
        personalLoanElement.classList.remove('show');
    }

    function setCheckValues(values = {}) {
        Object.keys(checkElements).forEach((id) => {
            const element = checkElements[id];
            if (element) {
                const parentElement = element.parentElement;
                if (values[id] !== undefined && values[id] !== null && values[id] !== "") {
                    element.innerHTML = values[id]; // Update the content of the <div>
                    parentElement.classList.remove('hide'); // Ensure parent is visible
                } else if (parentElement) {
                    parentElement.classList.add('hide'); // Hide parent if value is blank
                }
            }
        });
    }

    function typeHeadline(headline) {
        const typedContainer = document.getElementById('typed-headline');
        if (!typedContainer || !window.Typed) return;

        // Destroy any existing Typed instance before creating a new one
        if (typedContainer.typedInstance) {
            typedContainer.typedInstance.destroy();
        }
        typedContainer.innerHTML = "<span></span>"; // Add a span for styling
        const spanElement = typedContainer.querySelector("span");

        typedContainer.typedInstance = new Typed(spanElement, {
            strings: [headline],
            typeSpeed: 24,
            backSpeed: 10,
            smartBackspace: true,
            cursorChar: '|',
            showCursor: true, // Adjust based on preference
        });
    }

    function handleIsHomeowner() {
        hideAll();
        stepTwoElement.classList.add('show');
        typeHeadline(homeownerHeadline);
    }

    function handleNotHomeowner() {
        hideAll();
     		personalLoanElement.classList.add('show');
        typeHeadline(finalHeadline);
    	  setCheckValues({ check1: "See options in under 60 seconds", check2: "Money as fast as next business day", check3: "" });
    }

    function handleTwoYes() {
      hideAll();
      addressElement.classList.add('show');
      typeHeadline(finalHeadline);
    }

    function handleTwoMaybe() {
      hideAll();
      addressElement.classList.add('show');
      typeHeadline(finalHeadline);
    }

    function handleTwoNo() {
      hideAll();
      personalLoanElement.classList.add('show');
      typeHeadline(finalHeadline);
      setCheckValues({ check1: "See options in under 60 seconds", check2: "Money as fast as next business day", check3: "" });
    }

    function handleGetStarted() {
        window.location.href = 'https://www.moneylion.com/network/point-declines/loans/search/loan-purpose';
    }

    // Adding event listeners for click events
    isHomeownerElement.addEventListener('click', handleIsHomeowner);
    notHomeownerElement.addEventListener('click', handleNotHomeowner);
    twoYesElement.addEventListener('click', handleTwoYes);
    twoMaybeElement.addEventListener('click', handleTwoMaybe);
    twoNoElement.addEventListener('click', handleTwoNo);
    getStartedElement.addEventListener('click', handleGetStarted);

    // Adding event listeners for keydown events to check for Enter key
    isHomeownerElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleIsHomeowner();
        }
    });

    notHomeownerElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleNotHomeowner();
        }
    });

    twoYesElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleTwoYes();
        }
    });

    twoMaybeElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleTwoMaybe();
        }
    });

    twoNoElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleTwoNo();
        }
    });

    getStartedElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleGetStarted();
        }
    });

    // Trigger headline typing on page load
    typeHeadline(onloadHeadline);
});
