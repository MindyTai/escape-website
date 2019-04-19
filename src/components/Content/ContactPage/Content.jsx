import React from 'react'
import ReactModal  from 'react-modal'

class Content extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      budget:'',
      message: '',
      showModal: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  
  handleCloseModal () {this.setState({ showModal: false })}

  handleChange(inputStateKey) {
    return (e) => {
      let value = e.target.value
      if (inputStateKey === 'phone') { value = value.replace(/\s/g, '') }
      this.setState({
        [inputStateKey]: value,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ showModal: true })
  }

  componentWillMount() {
    ReactModal.setAppElement('#root')
 }
  
  render(){
    const {name, phone, email, budget, message} = this.state
   
    return(
      <div className="content">
      <div className="container">
       <div className="row">
         <div className="col-sm-12 col-md-6 col-lg-6 pl-0">
           <h3 className="mt-5">五倍紅寶石股份有限公司</h3>
           <p>10046 台北市中正區衡陽路 7 號 5 樓</p>
           <div className="col-sm-12 col-md-6 col-lg-6 pl-0 info">  
           <div className="col-sm-12 col-md-12 col-lg-12 pl-0">
               Tel：02-2331-5247
             <br/>
               Mobile：0928-617-687
             <br/>
               E-mail： <a>hi@5xruby.tw</a>
           </div>
           <div className="col-sm-12 col-md-12 col-lg-12 pl-0">
             Fax：02-2331-8717
             <br/>
             統編：24536806
             </div>
           </div>  
           <div className="col-sm-12 col-md-12 col-lg-12 pl-0 map mt-4 mb-3">
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.016266311726!2d121.513862!3d25.0424189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-z!5e0!3m2!1szh-TW!2stw!4v1482991564796"></iframe>
           </div>
         </div>
         <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pt-5">
           任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
           <form className="form mt-3" onSubmit={this.handleSubmit}>
              <div className="bar">
                <input
                  className="p-1" 
                  type="text"
                  name="name"
                  placeholder='名字'
                  onChange={this.handleChange('name')}
                  value={this.state.name}
                  required
                />
              </div>
              <div className="bar mt-3">
                <input
                  className="p-1" 
                  type="email"
                  name="email"
                  placeholder='信箱' 
                  onChange={this.handleChange('email')}
                  value={this.state.email}
                  required
                />
              </div>
              <div className="bar mt-3">
                <input
                  className='p-1'
                  type='text'
                  placeholder='電話'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleChange('phone')}
                  pattern="([+][0-9]{1,4}|[0][0-9][-]{0,1})[0-9]{7,8}"
                  title='只能輸入該格式：+886912345678/05-5222222/0991333333'
                  required
                />
              </div>
              <select
                name="budget-list"
                className="bar mt-3"
                onChange={this.handleChange('budget')}
                defaultValue=""
                required
              >
                <option type="text" name="budge" value="" disabled>預算</option>
                <option type="text" name="budge" value="10萬以下">10萬以下</option>
                <option type="text" name="budge" value="10~50萬">10~50萬</option>
                <option type="text" name="budge" value="50~100萬">50~100萬</option>
                <option type="text" name="budge" value="100萬以上">100萬以上</option>
              </select>
              <textarea 
                className="bar mt-3 message p-1" 
                placeholder='留下你的訊息' 
                onChange={this.handleChange('message')}
                value={this.state.message}
                required
              />
              <input 
                type="submit" 
                value="送出" 
                className="mt-3 mb-3 button" 
              />
              <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="PopUp Model"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
              >
                <div className="mt-5 mx-auto message"> 
                  <p className="mt-2">名字：{name}</p>
                  <p className="mt-2">電話：{phone}</p>
                  <p className="mt-2">信箱：{email}</p>
                  <p className="mt-2">預算：{budget}</p>
                  <p className="mt-2">訊息：{message}</p>
                </div>
                <br />
                <button onClick={this.handleCloseModal}>Close</button>
              </ReactModal>
            </form>
         </div>
       </div>
      </div>
    </div>
    )
  }
}

export default Content