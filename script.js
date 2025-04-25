function copiarEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email).then(() => {
      console.log("E-mail copiado para a área de transferência!");
    }).catch(err => {
      console.error("Erro ao copiar o e-mail: ", err);
    });
}

const elementos = document.querySelectorAll('.invisivel')

const observador = new IntersectionObserver((nome1) =>{
  nome1.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('visivel')
    }else{
      entry.target.classList.remove('visivel')
    }
  })
})
elementos.forEach((elemento)=>observador.observe(elemento))


  
  