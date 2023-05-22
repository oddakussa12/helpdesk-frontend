import { Link } from "react-router-dom"

const Setting = () => {
    return (
        <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <h2 className="card-title">Settings</h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="card bg-base-200 col-span-1" >
                <div className="card-body">
                </div>
              </div>
              <div className="card bg-base-200 col-span-1">
                <div className="card-body">
                  
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
              <div className="card bg-base-200 col-span-1"  >
                <div className="card-body">
                </div>
              </div>
              <div className="card bg-base-200 col-span-1">
                <div className="card-body">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Setting
