//
//  MainViewController.swift
//  bai12
//
//  Created by Nguyen Duc Hoang on 1/2/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
  private let profileImage:UIImageView = {
    let imageView = UIImageView()
    imageView.translatesAutoresizingMaskIntoConstraints = false
    imageView.image = UIImage(named: "cat.jpg")
    imageView.layer.cornerRadius = IMAGE_HEIGHT / 2
    imageView.layer.borderColor = UIColor.red.cgColor
    imageView.layer.borderWidth = 2
    imageView.layer.masksToBounds = true
    imageView.widthAnchor.constraint(equalToConstant: IMAGE_WIDTH).isActive = true
    imageView.heightAnchor.constraint(equalToConstant: IMAGE_HEIGHT).isActive = true
    return imageView
  }()
  private let txtEmail: UITextField = {
    let textField = UITextField()
    textField.translatesAutoresizingMaskIntoConstraints = false
    textField.placeholder = "Enter your email"
    textField.borderStyle = .roundedRect
    
    return textField
  }()
  private let stackView: UIStackView = {
    let stackView = UIStackView()
    stackView.translatesAutoresizingMaskIntoConstraints = false
    stackView.axis = .vertical
    stackView.alignment = .center
    stackView.spacing = 20
    return stackView
  }()
    override func viewDidLoad() {
      super.viewDidLoad()
      view.backgroundColor = .white      
      /*
      view.addSubview(profileImage)
      profileImage.topAnchor.constraint(equalTo: view.topAnchor, constant: 100).isActive = true
      
      //labeled parameters
      center(view, profileImage)
      view.addSubview(txtEmail)
      txtEmail.topAnchor.constraint(equalTo: profileImage.bottomAnchor, constant: 20).isActive = true
      txtEmail.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20).isActive = true
      txtEmail.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20).isActive = true
 */
      view.addSubview(stackView)
      stackView.addArrangedSubview(profileImage)
      stackView.addArrangedSubview(txtEmail)
      if #available(iOS 11.0, *) {
        stackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 10).isActive = true
      } else {
        // Fallback on earlier versions
        stackView.topAnchor.constraint(equalTo: view.topAnchor, constant: 10).isActive = true
      }
      stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor).isActive = true
      stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor).isActive = true
    }  
}

