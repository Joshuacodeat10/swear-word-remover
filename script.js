
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
      element.textContent = element.textContent.replace(/cunt/gi,'████')
      element.textContent = element.textContent.replace(/bastard/gi,'████')
      element.textContent = element.textContent.replace(/Bloody Hell/gi,'████')
      element.textContent = element.textContent.replace(/Asshole/gi,'████')
      element.textContent = element.textContent.replace(/fckin/gi,'████')
      element.textContent = element.textContent.replace(/fckin/gi,'████')
      element.textContent = element.textContent.replace(/fucking/gi,'████')
      element.textContent = element.textContent.replace(/"fckin"/gi,'████')
      element.textContent = element.textContent.replace(/fcking/gi,'████')
      element.textContent = element.textContent.replace(/bullshit/gi,'████')
      element.textContent = element.textContent.replace(/goddamnit/gi,'████')
      element.textContent = element.textContent.replace(/cocaine/gi,'████')
      element.textContent = element.textContent.replace(/testicle/gi,'████')
      element.textContent = element.textContent.replace(/damn/gi,'████')
      element.textContent = element.textContent.replace(/marijuana/gi,'██████')
      element.textContent = element.textContent.replace(/twat/gi,'██████')

      element.textContent = element.textContent.replace(/minger/gi,'██████')
      element.textContent = element.textContent.replace(/dickhead/gi,'██████')
      element.textContent = element.textContent.replace(/fuck of/gi,'██████')
      element.textContent = element.textContent.replace(/motherfucker/gi,'██████')
      element.textContent = element.textContent.replace(/goddamn/gi,'██████')
      element.textContent = element.textContent.replace(/Dick head/gi,'██████')
      element.textContent = element.textContent.replace(/Dick head/gi,'██████')
      element.textContent = element.textContent.replace(/Choad/gi,'██████')

  }
}
