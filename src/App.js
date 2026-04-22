import { books } from "./books";
import Book from "./Book";

function App() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>

      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

export default App;
