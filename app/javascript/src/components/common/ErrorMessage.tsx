
interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card red darken-1">
          <div className="card-content white-text">
            <span className="card-title">Ошибка загрузки</span>
            <p>{ error }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
