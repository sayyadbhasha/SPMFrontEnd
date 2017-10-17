/**
 * @file Organisation Component.
 * @author Mahesh
 */
import React from 'react';
import './Organisation.scss';

class Organisation extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-xs-12">

            <div className="tree">
              <ul>
                <li>
                  <a ><img src="../../assets/images/icons/avatar-woman.png" alt="Carla Grant" />
                    <div className="tree-person-desc">
                      <div className="tree-person-name">Carla Grant</div>
                      <div className="tree-person-position">VP, Sales</div>
                    </div>
                    <div className="tree-person-counter">
                                                6/49
                                            </div>
                  </a>
                  <ul>
                    <li>
                      <a ><img src="../../assets/images/icons/avatar-woman.png" alt="Brenda Davis" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Brenda Davis</div>
                          <div className="tree-person-position">Administrative Assistant</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a ><img src="../../assets/images/icons/avatar-man.png" alt="Marcus Hoffs" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Marcus Hoffs</div>
                          <div className="tree-person-position">Sales Director, NE</div>
                          <div className="tree-person-additional">
                            <div className="tree-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 896"><path d="M512,128A128.07,128.07,0,0,0,384,256c0,47.22,25.88,88.06,64,110.28V384s0,128-128,128c-53.06,0-94.66,11.38-128,28.81V238.28c38.16-22.22,64-63.06,64-110.28A128,128,0,0,0,0,128c0,47.22,25.84,88.06,64,110.28V657.75C25.84,679.94,0,720.75,0,768a128,128,0,0,0,256,0c0-33.5-13.19-63.75-34.25-86.62C240.38,658.5,270.66,640,320,640c254,0,256-256,256-256V366.28c38.13-22.22,64-63.06,64-110.28A128.07,128.07,0,0,0,512,128ZM128,64a64,64,0,1,1-64,64A63.92,63.92,0,0,1,128,64Zm0,768a64,64,0,1,1,64-64A63.94,63.94,0,0,1,128,832ZM512,320a64,64,0,1,1,64-64A63.94,63.94,0,0,1,512,320Z" fill="#175d9d" /></svg>
                            </div>
                                                            +1 Matrix Manager
                                                        </div>
                        </div>
                        <div className="tree-person-counter">
                                                        9/13
                                                    </div>
                      </a>
                    </li>
                    <li>
                      <a ><img src="../../assets/images/icons/avatar-man.png" alt="Richard Maxx" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Richard Maxx</div>
                          <div className="tree-person-position">Sales Director, NC</div>
                        </div>
                        <div className="tree-person-counter">
                                                        4/5
                                                    </div>
                      </a>
                    </li>
                    <li>
                      <a ><img src="../../assets/images/icons/avatar-man.png" alt="Vic Stokes" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Vic Stokes</div>
                          <div className="tree-person-position">Sales Director, SW</div>
                        </div>
                        <div className="tree-person-counter">
                                                        4/7
                                                    </div>
                      </a>
                    </li>
                    <li>
                      <a ><img src="../../assets/images/icons/avatar-woman.png" alt="Wilma Sown" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Wilma Sown</div>
                          <div className="tree-person-position">Senior Director, Sales</div>
                        </div>
                        <div className="tree-person-counter">
                                                        6/6
                                                    </div>
                      </a>
                    </li>
                    <li className="tree-dotted">
                      <a ><img src="../../assets/images/icons/avatar-man.png" alt="Thomas Clark" />
                        <div className="tree-person-desc">
                          <div className="tree-person-name">Thomas Clark</div>
                          <div className="tree-person-position">Sales Manager, SC</div>
                          <div className="tree-person-additional">
                            <div className="tree-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 896"><path d="M512,128A128.07,128.07,0,0,0,384,256c0,47.22,25.88,88.06,64,110.28V384s0,128-128,128c-53.06,0-94.66,11.38-128,28.81V238.28c38.16-22.22,64-63.06,64-110.28A128,128,0,0,0,0,128c0,47.22,25.84,88.06,64,110.28V657.75C25.84,679.94,0,720.75,0,768a128,128,0,0,0,256,0c0-33.5-13.19-63.75-34.25-86.62C240.38,658.5,270.66,640,320,640c254,0,256-256,256-256V366.28c38.13-22.22,64-63.06,64-110.28A128.07,128.07,0,0,0,512,128ZM128,64a64,64,0,1,1-64,64A63.92,63.92,0,0,1,128,64Zm0,768a64,64,0,1,1,64-64A63.94,63.94,0,0,1,128,832ZM512,320a64,64,0,1,1,64-64A63.94,63.94,0,0,1,512,320Z" fill="#175d9d" /></svg>
                            </div>
                                                            +1 Direct Manager
                                                        </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Organisation;
