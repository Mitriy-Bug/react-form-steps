
import {useState} from 'react';
import { nanoid } from 'nanoid';
import {TrainingForm} from './TrainingForm';
import {TrainingBlock} from "./TrainingBlock";

export function TrainingContainer() {
    const [value1, setValue1] = useState(''); //состояние ввода даты
    const [value2, setValue2] = useState(''); //состояние ввода дистанции

    const [result, setResult] = useState([]); //состояние ввода нажатия кнопки OK

    const handCange1 = ({target}: React.ChangeEvent<HTMLInputElement>) => {
       setValue1(target.value);              
    }

    const handCange2 = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(target.value);              
     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value1 === '' || value2 === '') return false;

        const add  = {id: nanoid(), date: value1, dist: Number(value2)};

        const findEl = result.find((el: any) => el.date === value1);

        if(findEl) {
            findEl.dist = findEl.dist + Number(value2);
            const newArr = result.filter((el: any) => el.date !== value1)
            setResult([...newArr, findEl])
        } else {  
            setResult([...result, add]);
        }
        // setValue1(value1 = '');
        // setValue2(value2 = '');
        // e.target.reset();
    }

    //удаление родительского элемента кнопки крестик
    const handDel = ({target}: any) => {
        const parrentId = target.parentElement.id;
        const record = result.find((el) => el.id === parrentId);

        if(record) {
            const newArr = result.filter((el: any) => el.id !== parrentId)
            setResult([...newArr])
        }
    }
   
    //Сортировка массива объектов по дате
    result.sort((a: any, b: any) => (
        a.date < b.date ? 1 : b.date < a.date ? -1 : 0));
    
   return (
    <div className="trainingContainer">    
        <TrainingForm submit={handleSubmit} input1={handCange1} input2={handCange2} /> 
        <TrainingBlock  res={result} delClick={handDel}/>
    </div>
   )   
}