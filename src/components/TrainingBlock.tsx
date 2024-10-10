interface TrainingBlockProps {
    res: [any],
    delClick: (e: React.MouseEvent) => void   
  }

export function TrainingBlock({res, delClick}: TrainingBlockProps) {
    
    return (        
        <div className="trainingHistory">
            <div className="historiText">
                <p>Дата (ДД.ММ.ГГ)</p>
                <p>Пройдено, км</p>
                <p>Действия</p>
            </div>
             {res.map((item: any, idx: number) =>             
               <div className="historiItems" id={item.id} key={idx}>
                <p className="histriDate">{item.date}</p>
                <p className="histriDistance">{item.dist}</p>
                <p className="historyDelet" onClick={delClick}>✘</p>
                </div>                                           
                           
             )}                                                  
        </div>
    )   
}