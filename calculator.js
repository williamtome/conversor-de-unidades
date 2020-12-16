$(function(){
    $('#converter').click(() => {
      const milha = 1609.34
      const milhas = parseFloat($('#milhas').val()) * milha
      const metros = parseFloat($('#metros').val()) * milhas
      console.log(metros);
    })

    $('#limpar').click(() => {
      $('#milhas').val('')
      $('#metros').val('')
    })
})