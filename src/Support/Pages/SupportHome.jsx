import { TicketIcon, CheckBadgeIcon, RocketLaunchIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid"
const SupportHome = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4">
          <div className="px-3 py-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-nowrap">
                  <div className="basis-3/4">
                    <h2 className="card-title"></h2>
                    <p>TICKETS</p>
                    <p className="text-4xl">43</p>
                    <p>Total closed tickets</p>
                  </div>
                  <div className="basis-1/4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span>
                          <CheckBadgeIcon className="h-14 w-14 text-success" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4">
          <div className="px-3 py-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-nowrap">
                  <div className="basis-3/4">
                    <h2 className="card-title"></h2>
                    <p>TICKETS</p>
                    <p className="text-4xl">43</p>
                    <p>Total Open tickets</p>
                  </div>
                  <div className="basis-1/4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span>
                          <DocumentDuplicateIcon className="h-14 w-14 text-info" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4">
          <div className="px-3 py-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-nowrap">
                  <div className="basis-3/4">
                    <h2 className="card-title"></h2>
                    <p>TICKETS</p>
                    <p className="text-4xl">43</p>
                    <p>Total tickets in progress</p>
                  </div>
                  <div className="basis-1/4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span>
                          <RocketLaunchIcon className="h-14 w-14 text-error" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4">
          <div className="px-3 py-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-nowrap">
                  <div className="basis-3/4">
                    <h2 className="card-title"></h2>
                    <p>TICKETS</p>
                    <p className="text-4xl">43</p>
                    <p>Total assigned tickets</p>
                  </div>
                  <div className="basis-1/4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span>
                          <TicketIcon className="h-14 w-14 text-warning" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 mt-10">
        <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
          <div className="card-body">
            <h2 className="card-title">New tickets</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default SupportHome
