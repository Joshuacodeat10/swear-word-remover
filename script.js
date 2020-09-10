
replaceText(document.body)

function replaceText(element){
  if(element.hasChildNodes()){
    element.childNodes.forEach(replaceText)

  }
  else if(element.nodeType === Text.TEXT_NODE){
      element.textContent = element.textContent.replace(/fuck/gi,'████')
      element.textContent = element.textContent.replace(/f\*\ck/gi,'████')
      element.textContent = element.textContent.replace(/bitch/gi,'████')
    
      element.textContent = element.textContent.replace(/shit/gi,'████')
   
      
      element.textContent = element.textContent.replace(/Son of a b/gi,'████')

      element.textContent = element.textContent.replace(/bastard/gi,'████')


      element.textContent = element.textContent.replace(/fckin/gi,'████')
      element.textContent = element.textContent.replace(/fckin/gi,'████')
      element.textContent = element.textContent.replace(/"fckin"/gi,'████')
      element.textContent = element.textContent.replace(/fcking/gi,'████')
     





  }
}