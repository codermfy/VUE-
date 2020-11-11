export default {
		//类似计算属性
		powerCounter(state){
			return state.counter*state.counter
		},
		getOlderStu(state){
			return state.student.filter(stu =>stu.age>20)
		},
		getOlderStuLength(state,getters){
			return getters.getOlderStu.length
		},
		getAgeOldStu(state){
			// return function(age){
			// 	return state.student.filter(stu =>stu.age>age)
			// }
			return age =>{
				return state.student.filter(stu =>stu.age>age)
			}
		}
	}