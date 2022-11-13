let criarTask = () => {
    let conteudo = document.getElementById('task')
    if (!conteudo.value) return
    let texto = document.createTextNode(`${conteudo.value}`)
    let novoItem = document.createElement('li')
    let lista = document.getElementById("todo-list")
    novoItem.classList.add("list-group-item")
    novoItem.appendChild(texto) 
    //novoItem.onclick = () => novoItem.remove() 
    let divtable = document.createElement('div')
    let divrow = document.createElement('div')
    let divcolr = document.createElement('div')
    let divcoll = document.createElement('div')
    divrow.classList.add('row')
    divcolr.classList.add('col-3')
    divcoll.classList.add('col')
    divtable.classList.add("container")
    let divcomplete = document.createElement('div')
    divcomplete.classList.add('hide')
    let complete = document.createElement('button')
    complete.classList.add('btn')
    //complete.id.add('completebutton')
    complete.onclick = () => {
        novoItem.remove()
        complete.remove()
    }
    divcomplete.appendChild(complete)
    novoItem.appendChild(divcomplete)
    divcoll.appendChild(novoItem)
    divcolr.appendChild(divcomplete)
    divrow.appendChild(divcoll)
    divrow.appendChild(divcolr)
    divtable.appendChild(divrow)
    lista.prepend(divtable)
    divrow.onmouseover = () => divcomplete.classList.remove('hide')
    divrow.onmouseleave = () => divcomplete.classList.add('hide')
    return
}

let Complete = () => {

}