const inputSlider = document.getElementById("inputSlider");
        const sliderValue = document.getElementById("sliderValue");
        const passBox = document.getElementById("passBox");
        const upperCase = document.getElementById("upperCase");
        const lowerCase = document.getElementById("lowerCase");
        const numbers = document.getElementById("numbers");
        const characters = document.getElementById("characters");
        const genBtn = document.getElementById("genPassword");
        const iconCopy = document.getElementById("iconCopy");

        sliderValue.textContent = inputSlider.value;
        inputSlider.addEventListener("input", ()=> {
            sliderValue.textContent = inputSlider.value;
        })

        genBtn.addEventListener("click", ()=>{
            passBox.value = getPassword();
        })

        let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerChars = "abcdefghijklmnopqrstuvwxyz";
        let allNumbers = "0123456789";
        let allSymbols = "#~@-_+=£$%^&*/?><!";

        function getPassword(){
            let genPassword = "";
            let allChars = "";
            allChars += lowerCase.checked ? lowerChars : "";
            allChars += upperCase.checked ? upperChars : "";
            allChars += numbers.checked ? allNumbers : "";
            allChars += characters.checked ? allSymbols : "";

            if(allChars == "" || allChars.length == 0){
                return genPassword;
            }

            let passwordLength = parseInt(inputSlider.value);

            for (let i = 0; i < passwordLength; i++) {
            genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

            return genPassword;
        }

        iconCopy.addEventListener("click", ()=>{
            if(passBox.value != "" || passBox.value.length >= 1){
                navigator.clipboard.writeText(passBox.value);
                iconCopy.title = "Copied";
            }
        })
