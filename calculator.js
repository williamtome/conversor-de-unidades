$(function(){
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if(!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        const conversao = $('#mostrar-conversao')
        const milha = 1609.34
        const milhas = parseFloat($('#milhas').val()) * milha
        const metros = parseFloat($('#metros').val()) * milhas
        conversao.empty()
        conversao.append(metros)
        conversao.removeClass('d-none')
      }
      form.classList.add('was-validated')
    }, false)
  })

  $('#limpar').click(() => {
    $('#milhas').val('')
    $('#metros').val('')
  })
})