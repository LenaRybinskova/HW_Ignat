import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number[] | number) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (typeof value == 'number') {
            setValue1(value)
        } else {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            onChange={change}
                            value={value1}/>
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider1'}
                            onChange={change}
                            value={[value1, value2]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11


/*
<span class="base-Slider-root">
  <span class="base-Slider-rail"></span>
  <span class="base-Slider-track"></span>
  <span
    data-index="0"
    class="base-Slider-mark base-Slider-markActive"
    style="left: 0%;"
  ></span>
  <span
    aria-hidden="true"
    data-index="0"
    class="base-Slider-markLabel base-Slider-markLabelActive"
    style="left: 0%;"
    >0</span
  >
  <span data-index="1" class="base-Slider-mark" style="left: 50%;"></span>
  <span
    aria-hidden="true"
    data-index="1"
    class="base-Slider-markLabel"
    style="left: 50%;"
    >50</span
  >
  <span data-index="2" class="base-Slider-mark" style="left: 100%;"></span>
  <span
    aria-hidden="true"
    data-index="2"
    class="base-Slider-markLabel"
    style="left: 100%;"
    >100</span
  >
  <span class="base-Slider-thumb">
    <input />
  </span>
</span> />*/
