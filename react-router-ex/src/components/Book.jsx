import { useParams } from "react-router-dom"
import { getBook } from "../data/data"
 
const Book = () => {
    const params = useParams()
    const book = getBook(parseInt(params.bookID))

    return (
        <main style={{paddin: '1rem'}}>
            <h2>قیمت کل : {`${book.amount} تومان`}</h2>
            <p>نام کتاب : {book.name}</p>
            <p>تاریخ انتشار : {book.due}</p>
            <p>
                <button>حذف کتاب</button>
            </p>
        </main>
    )
}

export default Book