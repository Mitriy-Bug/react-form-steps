interface TrainingFormProps {
    submit: (e: React.FormEvent<HTMLFormElement>) => void,
    input1: (e: React.ChangeEvent<HTMLInputElement>) => void,
    input2: (e: React.ChangeEvent<HTMLInputElement>) => void,
  }

export function TrainingForm({submit, input1, input2}: TrainingFormProps) {
    
    return (
        <div className="trainingBlock">
            <form className="trainingForm" onSubmit={submit}>
                <label className="traningDate"> Дата (ДД.ММ.ГГ)               
                    <input type="date" name="date" onChange={input1}></input>
                </label>
                <label className="traningDate"> Пройдено, км
                    <input name="dist" onChange={input2}></input>
                </label>
                <button className="btn">ОК</button>
            </form>                      
        </div>
    )
}