$(function(){
  const conversao = $('#mostrar-conversao')
  conversao.css('display', 'none')

  $('#converter').click(() => {
    const milha = 1609.34
    const milhas = parseFloat($('#milhas').val()) * milha
    const metros = parseFloat($('#metros').val()) * milhas
    conversao.append(metros)
    conversao.css('display', 'block')
  })

  $('#limpar').click(() => {
    $('#milhas').val('')
    $('#metros').val('')
  })
})