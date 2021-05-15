import React, { useEffect, useState } from 'react';
import './App.css';
import Progress from './Progress'
const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);


  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }



  useEffect(() => {

    const calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = getDocHeight();
      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
      setScrollPosition(scrollPostion);
    }

    const listenToScrollEvent = () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(() => {
          calculateScrollDistance();
        });
      });
    };
    listenToScrollEvent();
  }, [])


  return (
    <div className="App">
      <Progress scroll={`${scrollPosition}%`} />
      {/* <header></header> */}
      <main>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam distinctio odit. Tempore error quidem nisi animi odit vel nihil voluptatem ducimus quis, eos sit corporis consequuntur reprehenderit harum, commodi quibusdam nesciunt quod debitis perspiciatis modi asperiores! Cumque, dolor, eos, magnam obcaecati unde nostrum non odio id eius nesciunt quasi adipisci. Quas, repellat quidem! Dignissimos cum minus sunt itaque perferendis harum nesciunt ducimus aperiam, aspernatur aliquam soluta culpa possimus asperiores, facilis quis dolorem, porro quia consequuntur eum. Fuga numquam dolores facilis, autem quo iure accusamus aliquid adipisci cumque aspernatur provident magni voluptatum et porro ab omnis. Quaerat beatae eius illo.
          </p>
      </main>
    </div>
  );
}

export default App;