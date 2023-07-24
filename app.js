// // function for adding the details of books
function addFunc() {
    book = book_name.value
    author = author_name.value
    description = descrpn_id.value
    i = localStorage.length
    // // console.log(book,author,description);
    if ((book != "") && (author != "")) {
        user = { book, author, description }
        console.log(user);
        i += 1
        localStorage.setItem(i, JSON.stringify(user))
        alert("The book has been added successfully ")
    } else {
        alert("Must include book's name and author's name ")
    }

}




// // function for display of data of the books on ""details.html"" file 
function displayData() {
    for (i = 1; i <= localStorage.length; i++) {
        mybook = i
        userObj = JSON.parse(localStorage.getItem(mybook))
        console.log(userObj);
        table_id.innerHTML +=

            `   <td class = "td_section">${userObj.book}</td>
                <td class = "td_section">${userObj.author}</td>
                <td class = "td_section">${userObj.description}</td>`

    }

}
// // // used for search button
// function searchFunction() {
//     search_details_id.innerHTML = `<input type="text" required id="search_word_id">
//     <button type="button" id="search_button_id" onclick="search_button()">Search</button>`
// }

// // used for search button's search
function search_button(){
    search_book = search_word_id.value 
    flag = 0
    
    for (i = 1; i <= localStorage.length; i++) {
        book_object = JSON.parse(localStorage.getItem(i)) 
        console.log(book_object);
        if(book_object.book == search_book){
            search_details_id.innerHTML = `
            <table class="table table-striped table-hover mt-3">
            <thead>
                <tr class="trow_section">
                <th class="thead_section" scope="col">Book</th>
                <th class="thead_section" scope="col">Author</th>
                <th class="thead_section" scope="col">Description</th>
                </tr>
            </thead>
            </thead>
            <tbody id="table_id">
                <td class = "td_section">${book_object.book}</td>
                <td class = "td_section">${book_object.author}</td>
                <td class = "td_section">${book_object.description}</td>
            </tbody>
            </table>
            </div>`
            flag +=1
        }
    }
    if(flag == 0){
        search_details_id.innerHTML =`<h3 class="mt-5 text-danger">"${search_book}" not found</h3>`
    }
}



   

