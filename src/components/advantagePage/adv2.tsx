import React from "react";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import SvgSpriteTrash from "../svg/svgSpriteTrash";
import { IData, IRadio, IShippingField } from "../../App.interface";
import { setAllDataStage, setDataAdvStages } from "../../store/reducers/dataStages";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import useFormPersist from "react-hook-form-persist";

import '../../styles/checkbox.scss'
import SvgSpritePlus from "../svg/svgSpritePlus";
import { setStagePB } from "../../store/reducers/stages";
import { NavLink, useNavigate } from "react-router-dom";

export default function Adv2() {

  const [state] = React.useState<IData>({ data: { checked: 1 } });
  const [stateCheckbox] = React.useState<IRadio>({ data: { checked: 1 } });

  const navigate = useNavigate();
  const currentStagePB = useSelector((state: RootState) => state.stagesPB.currentStage);

  const dispatch = useDispatch<AppDispatch>();

  const refForm = React.useRef<HTMLFormElement>(null);

  const prevHandler = () => {
    dispatch(setStagePB(currentStagePB - 1))
  }

  const onSubmit: SubmitHandler<IShippingField> = data => {
    dispatch(setDataAdvStages([data]))
  }

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    control,
    setValue,
    watch
  } = useForm<IShippingField>({
    mode: 'onSubmit',
  });

  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least 1 item"
    }
  })

  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      navigate('/aboutPage')
      dispatch(setStagePB(currentStagePB + 1))
    }
  }, [isSubmitSuccessful])

  return (
    <div>
      <form ref={refForm} onSubmit={handleSubmit(onSubmit)}>
        <legend>Advantages</legend>
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>
                <input className="inputAdv"
                  placeholder={'your advantage'}
                  {...register(`cart.${index}.name`,
                    {
                      required: 'Это обязательное поле!',
                    })}
                />
                <SvgSpriteTrash hanldeDeleteProp={() => remove(index)} />
              </label>
            </section>
          );
        })}
        <div >
          <div className='addItem' onClick={() => {
            append({
              name: 'add your advantage',
            });
          }}>
            <SvgSpritePlus />
          </div>
        </div>
        <p>{errors.cart?.root?.message}</p>
        <section>
          <legend>Checkbox Group</legend>
          <label className="labelAdv">
            <p>1</p>
            <input type="checkbox" className="inputAdvCheck"
              defaultChecked={stateCheckbox.data.checked === 1}
              value={1}
              {...register("checkbox", {
                required: 'Это обязательное поле!',
              })} />
          </label>
          <label className="labelAdv">
            <p>2</p>
            <input type="checkbox" className="inputAdvCheck"
              defaultChecked={stateCheckbox.data.checked === 2}
              value={2}
              {...register("checkbox", {
                required: 'Это обязательное поле!',
              })} />
          </label>
          <label className="labelAdv">
            <p>3</p>
            <input type="checkbox" className="inputAdvCheck"
              defaultChecked={stateCheckbox.data.checked === 3}
              value="3"
              {...register("checkbox", {
                required: 'Это обязательное поле!',
              })} />
          </label>
          {errors.checkbox &&
            <div style={{ color: 'red' }}>
              {errors.checkbox.message}
            </div>
          }
        </section>
        <section>
          <legend>Radio Group</legend>
          <label className="labelAdv">
            <p>1</p>
            <input type="radio" className="inputAdvCheck"
            value={1}
              defaultChecked={state.data.checked === 1}
              {...register("radio", {
                required: 'Это обязательное поле!',
              })} />
          </label>
          <label className="labelAdv">
            <p>2</p>
            <input type="radio" className="inputAdvCheck"
              value={2}
              defaultChecked={state.data.checked === 2}
              {...register("radio", {
                required: 'Это обязательное поле!',
              })} />
          </label>
          <label className="labelAdv">
            <p>3</p>
            <input type="radio" className="inputAdvCheck"
              value={3}
              defaultChecked={state.data.checked === 3}
              {...register("radio", {
                required: 'Это обязательное поле!',
              })} />
          </label>
        </section>
        <div className="buttons_container">
          <NavLink to={'/createPage'} onClick={prevHandler}>Назад</NavLink>
          <button>Далее</button>
        </div>
      </form>
    </div>
  );
}


