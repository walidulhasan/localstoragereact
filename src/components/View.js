import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.code}>
            <td>{book.code}</td>
            <td>{book.name}</td>
            <td>{book.category}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}