import '../App.css'
export default function Field({ name, label, type, autoComplete, required, src, alt, placeholder }) {
  return (
    <div className='fg'>
    <label id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')}>
  {label} {required ? <span title="Required"></span> : undefined}
</label>
    <div className='ind'>
    <img src={src} alt={alt} className='img' width={28} height={28}/>
    <input
  autoComplete={autoComplete}
  id={[name, 'input'].join('-')}
  name={name}
  required={required}
  type={type}
  placeholder={placeholder}/>
    </div>
    </div>

  )
}
