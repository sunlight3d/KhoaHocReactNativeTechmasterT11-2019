//
//  UIViewController+UI.swift
//  bai12
//
//  Created by Nguyen Duc Hoang on 1/2/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit

extension UIViewController {
  func center(_ parentView: UIView, _ childView: UIView) {
    childView.translatesAutoresizingMaskIntoConstraints = false
    parentView.addSubview(childView)
    childView.centerXAnchor.constraint(equalTo: parentView.centerXAnchor).isActive = true
  }
}
