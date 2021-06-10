import './App.css';
import {useEffect, useState} from "react";
import SimpleTree from "./components/Tree";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const panel = document.querySelector(".App");

        let m_pos;

        function resize(e) {
            if (e.x <= 350) {
                return
            }
            const dx = m_pos - e.x;
            m_pos = e.x;
            panel.style.width = (parseInt(getComputedStyle(panel, '').width) - dx) + "px";
        }

        function addResize(e) {
            if (e.offsetX > 4) {
                m_pos = e.x;
                document.addEventListener("mousemove", resize, false);
            }

        }

        function deleteResize() {
            document.removeEventListener("mousemove", resize, false);
        }

        panel.addEventListener("mousedown", addResize, false);

        document.addEventListener("mouseup", deleteResize, false);
        return () => {
            document.removeEventListener('mousedown', addResize);
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', deleteResize);
        }
    }, [])
    useEffect(() => {
        (async () => {
            const normalizeStructure = (arr) => {
                let parentElem = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (parentElem.type === 'FOLDER' || parentElem.type === 'ROOT') {
                        parentElem.children = [];
                    }
                    for (let j = i; j < arr.length; j++) {
                        if (arr[j].parent === parentElem.reference) {
                            parentElem.children.push(arr[j]);
                        }
                    }
                    parentElem = arr[i];
                    delete arr[i];
                }

                return arr[0];
            }
            try {
                let response = await fetch('data.json');
                let {data} = await response.json();
                setData(normalizeStructure(data));
            } catch (err) {
                console.error(err)
            }
        })();
    }, [])

    return (
        <div className="App">
            <SimpleTree root={data}/>
        </div>
    );
}

export default App;
