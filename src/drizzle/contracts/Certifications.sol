pragma solidity ^0.5.2;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract BAMCertification is ERC721 {
  // Variables
  struct Certificate {
    string name;
  }
  address owner;
  Certificate[] public certificates;
  
  // Constructor
  constructor() public{
    owner = msg.sender;
  }
  
  // Methods
  
  // Create Certificate
  function createCertificate(string memory _name, address _to) public returns (bool){
    uint certificateId = certificates.length;
    certificates.push(Certificate(_name));
    
    _mint(_to, certificateId);
    
    return true;
  }
}