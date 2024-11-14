//
//  ViewModule.swift
//  reactcoreml
//
//  Created by 間嶋大輔 on 2024/11/14.
//

import Foundation
import React

@objc(ViewModule)
class ViewModule: NSObject {
    private var viewController: ViewController?

    @objc func showView() {
        DispatchQueue.main.async {
            guard let rootViewController = UIApplication.shared.keyWindow?.rootViewController else { return }
            
            self.viewController = ViewController()
            self.viewController?.modalPresentationStyle = .fullScreen

            if let vc = self.viewController {
                rootViewController.present(vc, animated: true, completion: nil)
            }
        }
    }

    @objc func dismissView() {
        DispatchQueue.main.async {
            self.viewController?.dismiss(animated: true, completion: nil)
            self.viewController = nil
        }
    }
}
