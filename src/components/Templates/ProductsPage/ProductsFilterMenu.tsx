import React from 'react'
import SelectorFilter from './SelectorFilter'
import SwitchInput from './SwichFilter'

function ProductsFilterMenu() {
  const productTypes = [
    {name:'mug',title:"ماگ"},
    {name:'t-shert',title:"لباس"},
    {name:'sticker',title:"استیکر"},
  ]

  const productColor =[
    {name:'red',title:"قرمز"},
    {name:'red',title:"قرمز"}
  ]

  const productSize = [
    {name:'md' , title:'مدیوم'},
    {name:'lg' , title:'لارج'},
    {name:'xl' , title:'ایکس لارج'}
  ]
  return (
    <div className='w-full flex flex-col border p-3 rounded-xl  sticky top-10'>
            <div className=""> فیلتر ها </div>
            <SelectorFilter options={productTypes} title='طرح ها'/>
            <SelectorFilter options={productColor} title='رنگ ها'/>
            <SelectorFilter options={productSize} title='سایز ها'/>

            < SwitchInput title={'موجود ها'}/>
            < SwitchInput title={'فق طمحصولات گرافیکی'}/>
            < SwitchInput title={"ارسالی امروز"}/>
    </div>
  )
}

export default ProductsFilterMenu
