import SplitType, { TypesListString, TypesValue } from "split-type";
import { animate, stagger } from "motion";

export const splitAnimation = (idName: string, type: TypesListString | TypesValue[] | undefined) => {
    const item = new SplitType(
      document.querySelectorAll(idName),
      { types: type } // or 'chars', 'lines' or 'lines-small'
    );

    animate(
      item.words || [],
      {
        y: [5, 0],
        opacity: [0, 1],
      },
      { duration: 0.1, delay: stagger(0.1) }
    );
    }
