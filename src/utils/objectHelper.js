export const updateObjInArray = (items, itemId, objPropName, newObj) => {

    return items.map(u => {
            if (u[objPropName] === itemId) {
                return {...u, ...newObj}
            }
            return u;
        })
}