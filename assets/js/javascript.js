/* Eu tive dificuldades com o Java, eu iria pedir ajuda para o Lucas (Instrutor/Facilitador), mas acaba que eu só poderia ter contato com ele terça feira e atrasaria o projeto.*/
  let encryptBtn = document.getElementById('encrypt-btn');
        let eInput = document.getElementById('encryptedInput-1')
        let pInput = document.getElementById('plainInput')
        let inputs = [eInput,pInput]
        let copyBtn = document.getElementById('copyToClipBoard')

        inputs.forEach( input => {
            input.oninput = () => {
                input.value = input.value.toUpperCase()
            }
        })

        function encrypt(){
            let pInput = documet.getElementById('plainInput-1').value
            let solved = ''
            let shiftInput = parseInt(document.getElementById('shiftInput').value)

            for(var i = 0; i< pInput.lenght; i++){
                let ascii_num = pInput[i].charCodeAt()
                let sum = ascii_num + shiftInput
                sum >= 65 && sum <=90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
            }
            eInput.value = solved
        }

            function copyText() {
                eInput.select()
                eInput.setSelectionRange(0,99999)
                document.execCommand('copy')
                alert(`Mensagem Copiada: ${eInput.value}`)
            }
        copyBtn.addEventListener('click', Copiar)
        encryptbtn.addEventListener('click', Criptografar);


        
