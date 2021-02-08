import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.Image;

public class Home extends JFrame implements ActionListener{

	JPanel pnl,pnl2;
	JLabel lbl,lbl2,lbl3,lbl4,footer,footer2;
	JLabel corpl,wedl,birthl,socl,kidl;
	JButton corporate,birthday,kids,social,wedding;
	JButton blogin,bregister;
	ImageIcon corp,birth,kid,weds,soc;

	public Home(){
		super("Home Page");
		setSize(1450,900);
		setVisible(true);


		//------ heading ----------
		pnl=new JPanel();
		add(pnl);
		pnl.setLayout(null);

		lbl=new JLabel("Make Merry Events");
		lbl2=new JLabel("<html><p><br>We don't just say, we make it happen!!</p></html>");
		lbl3=new JLabel("..........................................");

		Font f1=new Font("Times New Roman",Font.BOLD+Font.ITALIC,40);
		Font f2=new Font("Calibri",Font.BOLD,20);
		Font f3=new Font("Times New Roman",Font.ITALIC,40);

		lbl.setFont(f1);
		lbl2.setFont(f2);
		lbl3.setFont(f3);

		lbl.setForeground(new Color(178,34,34));
		pnl.setBackground(new Color(255,204,204));
		lbl2.setForeground(new Color(205,92,92));
		lbl3.setForeground(new Color(178,34,34));

		lbl.setBounds(370,5,900,70);
		lbl2.setBounds(700,15,900,60);
		lbl3.setBounds(480,60,1000,50);

		pnl.add(lbl);
		pnl.add(lbl2);
		pnl.add(lbl3);		

		//-------- body ---------
		lbl4=new JLabel("EVENTS");
		Font f4=new Font("Gabriola",Font.BOLD,40);
		lbl4.setFont(f4);
		lbl4.setForeground(Color.black);
		lbl4.setBounds(630,-55,200,400);
		pnl.add(lbl4);

		ImageIcon corp=new ImageIcon("E:/jdk1.8.0_271/bin/corporate1.jpg");
		//pnl.add(corp);
		JLabel lbl5=new JLabel(corp);
		pnl.add(lbl5);
		//ImageIcon corp=new ImageIcon("C:\\Users\\Home\\Desktop\\images\\corporate1.png");
		//ImageIcon weds=new ImageIcon("C:\\Users\\Home\\Desktop\\images\\wedding1.jpg");
		//ImageIcon kid=new ImageIcon("C:\\Users\\Home\\Desktop\\images\\birthday1.jpg");
		//ImageIcon soc=new ImageIcon("C:\\Users\\Home\\Desktop\\images\\social.jpg");
		//ImageIcon birth=new ImageIcon("C:\\Users\\Home\\Desktop\\images\\birthday2.jpg");
		//GridLayout gl=new GridLayout(2,3);
		//events=new JPanel(gl);
		//corporate=new JButton();
		//corporate.setIcon(new ImageIcon("C:\\Users\\Home\\Desktop\\images\\corporate1.jpg"));
		//wedding=new JButton(weds);
		//kids=new JButton(kid);
		//social=new JButton(soc);
		//birthday=new JButton(birth);
		//events.add(corporate);
		//pnl.add(wedding);
		//pnl.add(kids);
		//pnl.add(social);
		//pnl.add(birthday);
		//validate();
		//JLabel corpl=new JLabel("Corporate");
		//corpl.setBounds(200,100,300,200);
		//pnl.add(corpl);

		corp=new ImageIcon("corporate1.jpg");
		JButton corporate=new JButton(corp);
		corporate.setBounds(200,175,250,180);
		pnl.add(corporate);
		corpl=new JLabel("Corporate Events");
		corpl.setFont(f2);
		corpl.setBounds(240,320,200,100);
		pnl.add(corpl);

		corporate.addActionListener(new ActionListener(){  
			public void actionPerformed(ActionEvent e){  
				pnl.setVisible(false);
	            Corporate c=new Corporate();
				c.setVisible(true);  
        	}  
    	});
		
		birth=new ImageIcon("birthday2.jpg");
		JButton birthday=new JButton(birth);
		birthday.setBounds(550,175,250,180);
		pnl.add(birthday);
		birthl=new JLabel("Birthday Events");
		birthl.setFont(f2);
		birthl.setBounds(610,320,200,100);
		pnl.add(birthl);

		birthday.addActionListener(new ActionListener(){  
			public void actionPerformed(ActionEvent f){ 
					pnl.setVisible(false);
		            Birthday b=new Birthday();
					b.setVisible(true);  
        	}  
    	});

		kid=new ImageIcon("birthday1.jpg");
		JButton kids=new JButton(kid);
		kids.setBounds(900,175,250,180);
		pnl.add(kids);
		kidl=new JLabel("Kids Events");
		kidl.setFont(f2);
		kidl.setBounds(900,320,200,100);
		pnl.add(kidl);

		kids.addActionListener(new ActionListener(){  
			public void actionPerformed(ActionEvent g){  
				pnl.setVisible(false);
	            Kids k=new Kids();
				k.setVisible(true);  
        	}  
    	});

		soc=new ImageIcon("social2.jpg");
		JButton social=new JButton(soc);
		social.setBounds(390,400,250,180);
		pnl.add(social);
		socl=new JLabel("Social Events");
		socl.setFont(f2);
		socl.setBounds(450,550,200,100);
		pnl.add(socl);

		social.addActionListener(new ActionListener(){  
			public void actionPerformed(ActionEvent g){  
				pnl.setVisible(false);
	            Social s=new Social();
				s.setVisible(true);  
        	}  
    	});

		weds=new ImageIcon("wedding1.jpg");
		JButton wedding=new JButton(weds);
		wedding.setBounds(730,400,250,180);
		pnl.add(wedding);
		wedl=new JLabel("Wedding Events");
		wedl.setFont(f2);
		wedl.setBounds(780,550,200,100);
		pnl.add(wedl);

		wedding.addActionListener(new ActionListener(){  
			public void actionPerformed(ActionEvent h){  
				pnl.setVisible(false);
	            Wedding w=new Wedding();
				w.setVisible(true);  
        	}  
    	});

		//----------- Footer -------------
		pnl2=new JPanel();
		int width=pnl.getWidth();
		int height=130;
		pnl.add(pnl2);
		pnl2.setLayout(null);
		pnl2.setVisible(true);
		pnl2.setSize(width,height);
		pnl2.setBackground(new Color(112,128,144));
		pnl2.setBounds(0,620,width,height);
		footer=new JLabel("Address : 'Make Merry Event Managers',Sukhwani Complex, 4th Floor, Chinchwad. Pune 411019");
		footer2=new JLabel("Phone No. : 8900456099 / 020 788190678");
		footer.setFont(f2);
		footer2.setFont(f2);
		footer.setBounds(100,15,800,40);
		footer2.setBounds(170,55,600,40);
		footer.setForeground(Color.white);
		footer2.setForeground(Color.white);
		pnl2.add(footer);
		pnl2.add(footer2);
	}


	public void actionPerformed(ActionEvent e){

		/*if(e.getSource()==corporate){
			corporate.setText("Clicked");
		}*/

		/*if(e.getSource()==corporate){
			pnl.setVisible(false);
			Corporate c=new Corporate();
			c.setVisible(true);
		}
		if(e.getSource()==wedding){
			Wedding w=new Wedding();
			this.dispose();
		}*/
		/*if(e.getSource()==birthday){
			Birthday b=new Birthday();
			this.dispose();
		}
		if(e.getSource()==kids){
			Kids k=new Kids();
			this.dispose();
		}
		if(e.getSource()==corporate){
			Social s=new Social();
			this.dispose();
		}*/
	}

	public static void main(String[] args){
		Home h=new Home();
	}
}